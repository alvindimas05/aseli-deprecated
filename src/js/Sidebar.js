const Sidebar = () =>
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
                <i className="fa fa-right-from-bracket"/>
                <span className="text-sm">&emsp;&emsp;Log out</span>
            </div>
        </div>
    </div>
</div>;

export default Sidebar;