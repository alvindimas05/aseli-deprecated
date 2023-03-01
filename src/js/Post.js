import Sidebar from "./Sidebar";

const Post = () =>
<div className="grid" style={{ gridTemplateColumns:"17.5% 70%", minHeight:"100vh" }}>
    <Sidebar/>
    <div className="grid" style={{ gridTemplateColumns:"45% 65%" }}>
        <div className="bg-[#121212]">
            <img alt="Post" src="https://via.placeholder.com/500"/>
        </div>
        <div className="p-10 bg-[#121212]">
            <div className="grid" style={{ gridTemplateColumns:"4rem 8rem auto" }}>
                <div className="flex justify-center overflow-hidden rounded-full h-16">
                    <img alt="Profile" src="https://play-lh.googleusercontent.com/MkDTZYlBz5l9DIMGbNHc7Yoc6gE5U5TdlVk-rPAv86mkXuUiKIUPHIrEKvYTJHsGHPw=w526-h296-rw"/>
                </div>
                <div className="flex items-center text-center font-medium text-lg ml-8">Username</div>
                <div className="flex items-center text-center">
                    <i class="fa-solid fa-ellipsis fa-2x ml-auto"/>
                </div>
            </div>
            <div className="text-sm mt-3">
                Mauris consectetur in sapien ac auctor. Aenean mollis nec diam ut iaculis. In a tempor nulla, in aliquam elit. Pellentesque et mauris mauris. Fusce auctor ultrices leo at tincidunt. Duis molestie diam ut justo pellentesque, non fringilla ex molestie. Integer molestie ante malesuada blandit pretium. Curabitur varius nunc sapien, nec faucibus nisl rutrum ac. Proin felis nunc, scelerisque quis est sit amet, egestas scelerisque nunc.
            </div>
            <div className="text-xs text-neutral-500 mt-2">
                <i className="fa fa-clock"/>&ensp;5 Minutes ago...
            </div>
        </div>
    </div>
</div>;

export default Post;