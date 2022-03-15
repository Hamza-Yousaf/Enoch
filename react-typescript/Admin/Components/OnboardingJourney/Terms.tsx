import React from "react";
import { useRouter } from "next/router";

const Terms = () => {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/admin/profile");
  };
  return (
    <div className="team-signin-accetBody">
      <p className="mb-4">
        Welcome to your new account Regina . Your account is compatable with
        many Enoch, but your Jadoolabs.com administrator decides services you
        may acces using your account. For tips about using your new account,
        visit the Enoch <a href="#">Help Center.</a>
      </p>

      <p className="mb-4">
        When you use Enoch services, your domain administrator will have access
        to your reginacooper01@gmail.com account information, including any data
        you store with this account in Enoch services. You can learns more
        <a href="#">here</a>, or by consulting your organization’s privacy
        policy, if one exists. You can choose to maintain separate account for
        your personal use of any Enoch services. If you have multiple Enoch
        accounts, you can
        <a href="#">manage which account you use</a> with Enoch services and
        <a href="#">switch between them</a> whenever you choose. Your username
        and profile picture can help you enusre that you`re using the intenet
        account.
      </p>

      <p className="mb-4">
        If your organization provides you to access to the Enoch
        <a href="#">core services,</a> your use of those services is governed by
        your organization`s Enoch agreement. Any other Enoch services your
        administrator enables (Additional Services) are avialable to you under
        the Enoch
        <a href="#">Terms of services</a> and the Enoch
        <a href="#">Privacy Policy.</a> Certain Additional Services may also
        have <a href="#">service-specific terms.</a> Your use of any services
        your administrator allows you to access constitutes acceptance of
        applicable service-specific terms.
      </p>

      <p className="mb-4">
        Click "ACCEPT" bellow to indicate that you understand this description
        of how your reginacooper01@gmail.com account works and agree to the
        Enoch <a href="#">Terms of Services</a> and the Enoch
        <a href="#">Privacy Policy.</a>
      </p>
      <p className="">
        <button
          onClick={goToProfile}
          type="button"
          className="bttn-primary team-signin-bttn"
        >
          Accept
        </button>
      </p>
    </div>
  );
};

export default Terms;
