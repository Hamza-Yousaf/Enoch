import Link from 'next/link'

const ConfirmNoAuth2: React.FC = () => {
  return (
<>
  <section>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='confirm-email-form'>
            <div className='signin-head'>
              <div className='dapp-header-logo'>
                <img src='/images/logo-big.png' alt='logo' className='img-fluid' />
              </div>
              <h2>Activate 2-Step verification - Authenticator app</h2>
              <div className='dapp-recovery-phn'>
                <span>
                  <img
                    src='/images/auth-check2.png'
                    alt='logo'
                    className='img-fluid'
                  />
                </span>
                Recovery Phone number set
              </div>
              <p>
                We’ve sent you an e-mail so you can start activating 2-Step
                verification for your account. Please read and follow the
                provided instructions to complete this process!
              </p>
            </div>

            <div className='d-flex dApp-request-btn'>
              <Link href='/auth/browser-verify-ga'>
                <a className='btn bttn-primary'>GOT IT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default ConfirmNoAuth2

