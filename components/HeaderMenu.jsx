import MenuTop from "./MenuTop"
import Footer from "./Footer"
export default function HeaderMenu({children}) {
    return (
        <>
        <MenuTop/>
        <div>{children}</div>
        <Footer/>
        </>
    )
}