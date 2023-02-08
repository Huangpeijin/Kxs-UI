import kButton from "./Button/index";
import kTextarea from "./Textarea/index";
import kPreview from "./Preview/index";
import kSpace from "./Space/index";

const component =[kButton,kTextarea,kPreview,kSpace];
const install =(app:any)=>{
    component.forEach((item)=>{
        app.use(item);
    })
};
 const TUI = {
    install,
 }
 export {kButton,kTextarea,kPreview,kSpace};
 export default TUI;