import SearchBox from '../Search/Search';
import './Header.css';
function Header(){
    return (
        <>
          <div className="Heading">
            <h1>Product List</h1>
          </div>
          <SearchBox/>
        </>
    );
}
export default Header;