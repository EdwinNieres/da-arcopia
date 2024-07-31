import { formatISO9075 } from "date-fns";

export default function Post({
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
  username,
}) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2019/04/1140-knitting-is-back-esp.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>

        <p className="info">
          {author && <a className="author">{author.username}</a>}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
