import React, { useEffect } from 'react';

interface HubSpotFormProps {
  targetId: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ targetId }) => {
  useEffect(() => {
    const scriptId = 'hubspot-forms-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const createForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "23256174",
          formId: "78c95aa8-b96e-4d0d-9532-651f8e9561a2",
          region: "na2",
          target: `#${targetId}`
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      createForm();
    }
  }, [targetId]);

  return <div id={targetId}></div>;
};

export default HubSpotForm;
