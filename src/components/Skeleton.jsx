import ContentLoader from "react-content-loader";

function Skeleton(props){
    return (
        <ContentLoader
            speed={2}
            width={1000}
            height={50}
            viewBox="0 0 250 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="11" y="0" rx="5" ry="5" width="90vw" height="200" />
        </ContentLoader>
    )
}

export default Skeleton