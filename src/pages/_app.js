import '../app/styles/tailwind.css';

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || ((children) => <>{children}</>);

    return (
        <div className="pt-20"> 
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;