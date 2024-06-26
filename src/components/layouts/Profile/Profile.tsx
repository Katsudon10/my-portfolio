import Backend from "@/components/layouts/Profile/Backend";
import Frontend from "@/components/layouts/Profile/Frontend";
import Infrastructure from "@/components/layouts/Profile/Infrastructure";
import Tool from "@/components/layouts/Profile/Tool";

const Profile = () => {
    return (
        <div className="container mx-auto">
            <Frontend />
            <Backend />
            <Infrastructure />
            <Tool />
        </div>
    );
}

export default Profile;