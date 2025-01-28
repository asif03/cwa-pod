import logoBg from '../assets/logo-bg.png';

const Header = () => {
  return (
    <header className="flex h-[241px] w-full flex-row rounded-lg bg-linear-to-r from-[#4b53e2] to-[#37a5ff]">
      <div className="lg:w-2/3 w-full flex flex-col items-start justify-center h-full px-4 gap-3">
        <h3>Seamless Integration, Endless Possibilities</h3>
        <p className="sub-title">Simplify your print-on-demand process. Our seamless integration makes it easy to add
          custom products to your store.</p>
      </div>
      <div className="lg:w-1/3 lg:block hidden">
        <img src={logoBg} className="h-full w-auto" alt="logo"/>
      </div>
    </header>
  )
}
export default Header
