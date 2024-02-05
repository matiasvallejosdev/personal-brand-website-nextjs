import fs from 'fs';
import matter from 'gray-matter';

const getPostContent = (name) => {
  const folder = 'src/content/';
  const file = `${folder}${name}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

const options = {
  overrides: {
    a: {
      component: props => <a className="text-white" href={props.href}>{props.children}</a>,
    },
    h1: {
      component: props => <h1 className="text-white">{props.children}</h1>,
    },
    h2: {
      component: props => <h2 className="text-white">{props.children}</h2>,
    },
    h3: {
      component: props => <h3 className="text-white">{props.children}</h3>,
    },
    // Add overrides for other heading elements as needed
  },
};

export { getPostContent, options };
