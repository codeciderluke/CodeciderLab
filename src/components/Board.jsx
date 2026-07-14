import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

function loadPosts(boardId) {
  try {
    return JSON.parse(localStorage.getItem(`codecider-board-${boardId}`)) || []
  } catch {
    return []
  }
}

function savePosts(boardId, posts) {
  localStorage.setItem(`codecider-board-${boardId}`, JSON.stringify(posts))
}

function formatDate(ts, lang) {
  return new Date(ts).toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default function Board({ boardId }) {
  const { lang, t } = useLang()
  const [posts, setPosts] = useState(() => loadPosts(boardId))
  const [writing, setWriting] = useState(false)
  const [form, setForm] = useState({ author: '', title: '', content: '' })
  const [openPost, setOpenPost] = useState(null)
  const [replyDrafts, setReplyDrafts] = useState({})

  useEffect(() => {
    setPosts(loadPosts(boardId))
    setOpenPost(null)
    setWriting(false)
  }, [boardId])

  const update = (next) => {
    setPosts(next)
    savePosts(boardId, next)
  }

  const submitPost = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) return
    const post = {
      id: Date.now(),
      author: form.author.trim() || t('board_anonymous'),
      title: form.title.trim(),
      content: form.content.trim(),
      createdAt: Date.now(),
      replies: [],
    }
    update([post, ...posts])
    setForm({ author: '', title: '', content: '' })
    setWriting(false)
  }

  const submitReply = (postId) => {
    const draft = (replyDrafts[postId] || '').trim()
    if (!draft) return
    update(
      posts.map((p) =>
        p.id === postId
          ? {
              ...p,
              replies: [
                ...p.replies,
                { id: Date.now(), author: t('board_anonymous'), content: draft, createdAt: Date.now() },
              ],
            }
          : p,
      ),
    )
    setReplyDrafts({ ...replyDrafts, [postId]: '' })
  }

  return (
    <div className="board">
      <div className="board-head">
        <div>
          <h2>{t('board_title')}</h2>
          <p>{t('board_subtitle')}</p>
        </div>
        {!writing && (
          <button className="btn btn-primary" onClick={() => setWriting(true)}>
            ✏️ {t('board_new_post')}
          </button>
        )}
      </div>

      {writing && (
        <form className="board-form" onSubmit={submitPost}>
          <div className="board-form-row">
            <input
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder={t('board_post_author')}
              maxLength={30}
            />
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder={t('board_post_title')}
              maxLength={120}
              required
            />
          </div>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder={t('board_post_content')}
            rows={5}
            required
          />
          <div className="board-form-actions">
            <button type="button" className="btn btn-ghost" onClick={() => setWriting(false)}>
              {t('board_cancel')}
            </button>
            <button type="submit" className="btn btn-primary">
              {t('board_submit')}
            </button>
          </div>
        </form>
      )}

      {posts.length === 0 && !writing ? (
        <p className="board-empty">{t('board_empty')}</p>
      ) : (
        <ul className="board-list">
          {posts.map((post) => (
            <li key={post.id} className="board-post">
              <button
                className="board-post-summary"
                onClick={() => setOpenPost(openPost === post.id ? null : post.id)}
              >
                <span className="board-post-title">{post.title}</span>
                <span className="board-post-meta">
                  {post.author} · {formatDate(post.createdAt, lang)} · {t('board_replies', post.replies.length)}
                </span>
              </button>

              {openPost === post.id && (
                <div className="board-post-body">
                  <p>{post.content}</p>

                  {post.replies.length > 0 && (
                    <ul className="board-replies">
                      {post.replies.map((r) => (
                        <li key={r.id}>
                          <span className="reply-meta">
                            {r.author} · {formatDate(r.createdAt, lang)}
                          </span>
                          <p>{r.content}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="board-reply-form">
                    <input
                      value={replyDrafts[post.id] || ''}
                      onChange={(e) => setReplyDrafts({ ...replyDrafts, [post.id]: e.target.value })}
                      placeholder={t('board_reply_placeholder')}
                      onKeyDown={(e) => e.key === 'Enter' && submitReply(post.id)}
                    />
                    <button className="btn btn-primary" onClick={() => submitReply(post.id)}>
                      {t('board_reply_submit')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
