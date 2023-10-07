function AccountButton(props) {

    return (
      <nav className="navbar fixed-bottom">
        {
            props.walletAddress?
            props.walletAddress
            :
            <></>
        }
      </nav>
    );
  }
  
  export default AccountButton;
  