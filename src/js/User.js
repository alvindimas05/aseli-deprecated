const User = () =>
<div className="w-full">
    <div className="flex items-center overflow-hidden w-screen h-[7rem]">
        <img className="w-full" alt="Header" src="https://via.placeholder.com/500x200"/>
    </div>
    <div className="relative px-6 w-full">
        <div className="absolute top-[-2.5rem] flex justify-center overflow-hidden rounded-full border-2 border-white w-[5rem] h-[5rem]">
            <img alt="Profile" src="https://via.placeholder.com/100"/>
        </div>
    </div>
    <div className="text-center w-full">
        <div className="w-full">
            <div className="grid text-white text-center text-sm mt-2 w-3/4 float-right" style={{ gridTemplateColumns:"auto auto auto" }}>
                <div>
                    <div className="font-bold">21</div>
                    <div>Posts</div>
                </div>
                <div>
                    <div className="font-bold">31K</div>
                    <div>Followers</div>
                </div>
                <div>
                    <div className="font-bold">35</div>
                    <div>Following</div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-6 mt-2">
        <span className="float-left text-white font-medium">Lil Alamin</span>
        <button className="bg-white float-right px-6 py-[2px] rounded text-xs font-medium">Follow</button>
    </div>
</div>;

export default User;