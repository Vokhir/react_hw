export default function User(props) {


    let {item: user} = props;

    return (
        <div>
            <h2>{user.mission_name} - {user.launch_year}</h2>
            <img src={user.links.mission_patch_small} alt='img'/>
        </div>
    )
};
