// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import MobileNav from "./../MobileNav/MobileNav";
import LinkBtn from "../LinkBtn/LinkBtn";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";

// redux
import { useSelector } from "react-redux";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";

const Header = ({ modifyClasses = "" }) => {
  const { profileData, appLoading } = useSelector(store => store.auth);

  return (
    <header className={`py-elementGapMd ${modifyClasses}`}>
      <InnerContainer>
        <div className="grid grid-cols-1 gap-elementGapMd sm:gap-0 sm:grid-cols-2 items-center">
          {/* website logo */}
          <div className="justify-self-center sm:justify-self-start">
            <BrandLogo
              imageSource={logoPrimary}
              imageModifyClasses="h-[3rem]"
            />
          </div>

          {/* auth related options login/logout etc */}
          <div className="flex items-center gap-3 justify-self-center sm:justify-self-end">
            {/* loading Spinner */}
            {appLoading && (
              <LoadingSpinner
                text="Checking User"
                modifyClasses="text-2xl pr-4 text-primary"
                modifyInnerContainerClasses="!flex-row"
              />
            )}

            {!appLoading && !profileData && (
              <LinkBtn text="Sign In" url="/auth/login" />
            )}

            {/* if app is finished loading and user is truthy, show the userprofile */}
            {!appLoading && profileData && (
              <LinkBtn text="Go to Dashboard" url="/task-management" />
            )}

            {/* mobile nav button and mobile nav menu */}
            <MobileNav />
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
