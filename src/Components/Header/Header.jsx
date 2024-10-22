
import profile from '../../../assets/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 p-4"> 
            <h1 className="font-bold text-4xl">Knowledge Cafe </h1>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;