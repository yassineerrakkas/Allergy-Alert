import React from "react";

export const FAQ = () => {
  return (
    <>
      <div className="faq-row">
        <div className="faq-row-item">
          <h3 className="problem"> Try another Browser / Computer</h3>
          <p className="solution">
            Something not working? Nine times out of ten, switching browser /
            computer resolves the issue.
          </p>
        </div>
        <div className="faq-row-item">
          <h3 className="problem"> Out Of Memory Error</h3>
          <p className="solution">
            If you get an error message along these lines, then you may need to
            close some other tabs / applications or restart your computer /
            browser to free up some memory.
          </p>
        </div>
      </div>
      <div className="faq-row">
        <div className="faq-row-item">
          <h3 className="problem"> Plug-ins / Extensions</h3>
          <p className="solution">
            Buggy plug-ins & extensions break the web on a regular basis, and
            can compromise your online security and privacy. Never install
            questionable plug-ins or extensions. Avoid any that are not
            absolutely necessary.
          </p>
        </div>
        <div className="faq-row-item">
          <h3 className="problem"> Firewalls / Proxies</h3>
          <p className="solution">
            These can interfere with web requests in general and web sockets in
            particular.
          </p>
        </div>
      </div>
    </>
  );
};
