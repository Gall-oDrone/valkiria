import {ReactNode} from 'react';
interface IProps {
    children: ReactNode;
}

export default function Wrapper2({children, ...props}: IProps) {
    return (
        <div id="content-wrapper">
            <div className="container-fluid">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Blank Page</li>
                    </ol>
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}