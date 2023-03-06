import 'bootstrap/dist/css/bootstrap.min.css,';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'


function Extra () {
  return (
    <div className='extra'>
        <Dropdown>
            <DropdownToggle>
                Acordeon
            </DropdownToggle>


            <DropdownMenu>
                <Dropdown>Action One</Dropdown>
            </DropdownMenu>



        </Dropdown>

    </div>


  )
}

export default Extra;