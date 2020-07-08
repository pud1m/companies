import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../Interface/Loading';
import LogoNav from '../../components/Logo/LogoNav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const { handleSubmit } = useForm();

  const handleSearch = () => {
    setLoginLoading(true);
    try {
      setTimeout(function () {
        setLoginLoading(false);
        setSuccess(true);
      }, 3000);
    } catch (err) { } finally {  }
  };

  const onSubmit = () => {
    handleSearch();
  };

  return (
    <div className="header -wrap">
      <div className="header -logo">
        <LogoNav />
      </div>
      <div className="header -back">

      </div>
      <div className={`search -wrap ${open ? 'open' : ''}`}>
        {!open &&
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="button -clean"
          >
            <i className="icon -search"></i>
          </button>
        }
        {open &&
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="search -form">
            <i className="icon -search"></i>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Pesquisar"
              autoComplete="off"
              className="search -input"
              autofocus="true"
            />
          </form>
        }
      </div>
      { loginLoading && 
        <Loading />
      }
    </div>
  );
};

export default Header;
