import SectionTitle from './SectionTitle.jsx'
import { TikTokIcon, InstagramIcon, PinterestIcon, PlayIcon } from './icons.jsx'

const PLATFORM_ICON = { tiktok: TikTokIcon, instagram: InstagramIcon, pinterest: PinterestIcon }

function ClipCard({ post, duplicate }) {
  const Icon = PLATFORM_ICON[post.platform]
  const Wrapper = post.url ? 'a' : 'div'
  const wrapperProps = post.url
    ? { href: post.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  // The second (duplicated) copy is hidden from assistive tech to avoid
  // announcing every clip twice.
  const a11y = duplicate ? { 'aria-hidden': true, tabIndex: -1 } : {}

  return (
    <Wrapper
      {...wrapperProps}
      {...a11y}
      className="relative block w-[190px] h-[248px] mr-3 flex-shrink-0 bg-[#F2F2F2] overflow-hidden"
    >
      {post.image && (
        <img
          src={post.image}
          alt={post.author ? `@${post.author}` : ''}
          className="w-full h-full object-cover"
          draggable={false}
        />
      )}

      {post.url && (
        <>
          <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black/45 backdrop-blur-sm">
              <PlayIcon className="w-4 h-4 text-white ml-0.5" />
            </span>
          </span>
          {Icon && (
            <span className="absolute top-2 left-2 w-5 h-5 text-white">
              <Icon className="w-full h-full" />
            </span>
          )}
          {post.author && (
            <span className="absolute bottom-2 left-2 right-2 truncate text-[11px] font-medium text-white">
              @{post.author}
            </span>
          )}
        </>
      )}
    </Wrapper>
  )
}

// "Spotted on social" — an auto-scrolling carousel of viral clips. No manual
// scrolling needed; it glides on its own and pauses on hover.
export default function SpottedOnSocial({ posts }) {
  return (
    <div>
      <div className="px-5">
        <SectionTitle>SPOTTED ON SOCIAL</SectionTitle>
      </div>

      <div className="mt-6 overflow-hidden motion-reduce:overflow-x-auto">
        <div
          className="flex w-max social-marquee motion-reduce:[animation:none]"
          style={{ animationDuration: `${Math.max(posts.length, 1) * 4.5}s` }}
        >
          {posts.map((post, i) => (
            <ClipCard key={`a-${i}`} post={post} />
          ))}
          {posts.map((post, i) => (
            <ClipCard key={`b-${i}`} post={post} duplicate />
          ))}
        </div>
      </div>
    </div>
  )
}
