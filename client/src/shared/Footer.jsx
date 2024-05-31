import Button from '../components/Button/Button'
const Footer = () => {
  return (
    <div className=''>
      <footer className="p-10 bg-themePrimary text-white flex flex-col-reverse gap-4 md:flex-row items-start md:items-center md:justify-between ">
        <aside className=''>
          <h1 className='font-bold text-3xl'>AcademyCloud</h1>
          <p>Providing best books since 1992</p>
          <nav className='flex flex-wrap items-center gap-4 py-2'>
            <a className="link link-hover pr-4 border-r-2 border-white">Terms of use </a>
            <a className="link link-hover pr-4 border-r-2 border-white">Privacy policy </a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <p> © 2024 masum362. All rights reserved</p>
        </aside>

        <form className=''>
          <h6 className="font-bold text-3xl ">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="w-full flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-center sm:flex-nowrap">
              <input type="text" placeholder="youremail@gmail.conm" className="input input-bordered max-w-full sm:rounded-r-none" />
              <Button style={'btn sm:rounded-l-none'}>Subscribe</Button>

            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}

export default Footer