import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import Head from '../components/head';

export default function BaseLayout(props) {

    return (
        <div className="relative">
            {Head(props)}
            {Header(props)}
            <main>
                {props.children}
            </main>
            {Footer(props)}
        </div>
    );
}
