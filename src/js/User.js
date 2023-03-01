const User = () =>
<div className="grid" style={{ gridTemplateColumns:"17.5% 70%" }}>
    <div className="p-10 bg-[#101010]">
        <div className="h-screen fixed">
            <div className="text-[30px] font-bold">
                <i className="fa fa-home"/>&ensp;Aseli
            </div>
            <div className="mt-2 text-xs">Overview</div>
            <div>
                <div className="pt-4 cursor-pointer">
                    <i className="fa fa-home"/>
                    <span className="text-sm">&emsp;&emsp;Home</span>
                </div>
                <div className="pt-4 cursor-pointer">
                    <i className="fa fa-star"/>
                    <span className="text-sm">&emsp;&emsp;Popular</span>
                </div>
                <div className="pt-4 cursor-pointer">
                    <i className="fa fa-history"/>
                    <span className="text-sm">&emsp;&emsp;Recent</span>
                </div>
                <div className="pt-4 cursor-pointer">
                    <i className="fa fa-bookmark"/>
                    <span className="text-sm">&emsp;&emsp;&nbsp;Saved</span>
                </div>
                <div className="pt-4 cursor-pointer">
                    <i className="fa fa-search"/>
                    <span className="text-sm">&emsp;&emsp;Search</span>
                </div>
            </div>
            <div className="absolute bottom-0 pb-20">
                <div className="mt-2 text-xs">Account</div>
                <div className="pt-3 cursor-pointer">
                    <i className="fa fa-user"/>
                    <span className="text-sm">&emsp;&emsp;Profile</span>
                </div>
                <div className="pt-4 cursor-pointer">
                    <i class="fa fa-right-from-bracket"/>
                    <span className="text-sm">&emsp;&emsp;Log out</span>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className="w-full h-28 overflow-hidden">
            <img className="w-full" alt="Header" src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80"/>
        </div>
        <div className="px-16 bg-[#2A2A2E] pt-3 pb-3">
            <div className="grid w-full"  style={{ gridTemplateColumns:"27.5% 72.5%" }}>
                <div className="relative">
                    <div className="absolute bottom-16">
                        <div className="flex justify-center w-32 h-32 rounded-full overflow-hidden">
                            <img alt="Profile" src="https://play-lh.googleusercontent.com/MkDTZYlBz5l9DIMGbNHc7Yoc6gE5U5TdlVk-rPAv86mkXuUiKIUPHIrEKvYTJHsGHPw=w526-h296-rw"/>
                        </div>
                    </div>
                    <div className="pt-16 text-lg font-medium">
                        Username
                    </div>
                    <div className="text-xs pt-1s">
                        @username
                    </div>
                </div>
                <div className="text-xs text-justify font-light tracking-wide leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.
                </div>
            </div>
            <div className="pt-3">
                <span className="text-sm">
                    <span className="font-bold">21</span>
                    &ensp;Following
                    &ensp;
                    <span className="font-bold">21k</span>
                    &ensp;Followers
                </span>
                <button className="bg-white py-1 px-3 rounded-md text-xs text-black font-bold float-right">Edit Profile</button>
            </div>
            <div className="pt-4 grid" style={{ gridTemplateColumns:"auto auto auto" }}>
                <img className="w-full border-2 border-[#2A2A2E]" alt="Post" src="https://via.placeholder.com/200"/>
                <img className="w-full border-2 border-[#2A2A2E]" alt="Post" src="https://via.placeholder.com/200"/>
                <img className="w-full border-2 border-[#2A2A2E]" alt="Post" src="https://via.placeholder.com/200"/>
                <img className="w-full border-2 border-[#2A2A2E]" alt="Post" src="https://via.placeholder.com/200"/>
                <img className="w-full border-2 border-[#2A2A2E]" alt="Post" src="https://via.placeholder.com/200"/>
            </div>
        </div>
    </div>
</div>;

export default User;