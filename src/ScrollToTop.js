import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({history}){
    useEffect(() => {
        const unlisten = history.listen(()=>{
            window.scroll(0,300);
        });
        return () => {
            unlisten();
        }
    }, [])

    return(null);
}
export default withRouter(ScrollToTop);