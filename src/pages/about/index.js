import RootLayout from '../../app/layout';

function AboutPage() {
    return (
        <div className="p-5 bg-cRed border border-gray-300">
            <h1>About Us</h1>
            <p>Welcome to the about page!</p>
        </div>
    );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
