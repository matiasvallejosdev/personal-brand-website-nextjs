import Markdown from 'markdown-to-jsx';
import { getPostContent, options } from '@/utils/markdownHandler';

export default function About() {
  const post = getPostContent('about-me');
  return (
    <>
      <div className="mx-auto">
        <article className="prose my-8 mx-12">
          <Markdown options={options} className="text-white">{post.content}</Markdown>
        </article>
      </div>
    </>
  );
}
