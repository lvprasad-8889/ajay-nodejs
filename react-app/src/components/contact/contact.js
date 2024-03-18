import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firstActionThunk } from "../../store/action";

const Contact = () => {
    let users = useSelector((state) => state.counter.users);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(firstActionThunk());
      }, [dispatch])

    return (
        <div className="contact">
            {
                users && users.map((item, index) =>(
                    <div key={index}>
                        <div className="">{item.name}</div>
                        <div className="">{item.password}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Contact;