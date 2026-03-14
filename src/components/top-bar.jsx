
import '../styles/top-bar.css';

export class ButtonProps{
    constructor(onClick, label){
        this.onClick = onClick;
        this.label = label;
    }
}

export default function TopBar({btns,children}){  

    return(
      <div className='top-bar'>
        {
            btns.map((btn, index) => <button className='btn' key={index} onClick={btn.onClick}>{btn.label}</button>)
        }
        {children}
      </div>
    );

}