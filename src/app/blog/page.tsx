import { getSortedPostsData } from "../../../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    };
}

const BlogHome = ({ allPostsData }: { allPostsData: object }) => (
    <div>
        <div className="mt-6 text-center">
            <h1 className="text-4xl">Blog</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default BlogHome;