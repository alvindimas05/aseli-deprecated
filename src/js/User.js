const User = () =>
<div>
    <div className="flex items-center overflow-hidden w-screen h-24">
        <img className="w-full" alt="Header" src="https://via.placeholder.com/500x200"/>
    </div>
    <div className="relative" style={{ gridTemplateColumns:"auto auto" }}>
        <div className="absolute flex justify-center overflow-hidden rounded-full border-2 border-white w-20 h-20">
            <img alt="Profile" src="https://via.placeholder.com/100"/>
        </div>
    </div>
</div>;

export default User;