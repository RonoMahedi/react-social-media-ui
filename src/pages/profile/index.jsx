import Feed from "../../components/feed";
import Rightbar from "../../components/rightBar";
import Sidebar from "../../components/sideBar";
import TopBar from "../../components/topBar";
import "./profile.css";
// import Topbar from "../../components/topbar";
// import Sidebar from "../../components/sidebar";
// import Feed from "../../components/feed";
// import Rightbar from "../../components/rightbar";

const Profile=()=> {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;