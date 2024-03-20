import './ModalForm.css';
import formBg from '../../assets/formBg.webp'
// eslint-disable-next-line react/prop-types
const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <img src={formBg} alt="" className="fixedImage"/>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;