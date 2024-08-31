import { Outlet } from 'react-router-dom';
import Header from '../components/jsx/Header';
import './Home.css';
export default function Home() {
    return (
        <div className="wrapper">
            <Header />
            <Outlet></Outlet>
        </div>
    );
}
