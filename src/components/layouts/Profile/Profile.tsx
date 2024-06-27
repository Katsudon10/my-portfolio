import Backend from "@/components/layouts/Profile/Backend";
import Frontend from "@/components/layouts/Profile/Frontend";
import Infrastructure from "@/components/layouts/Profile/Infrastructure";
import Tool from "@/components/layouts/Profile/Tool";

const Profile = () => {
    return (
        <div className="justify-center container mx-auto grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 ">
            <Frontend />
            <Backend />
            <Infrastructure />
            <Tool />
        </div>
    );
}

export default Profile;