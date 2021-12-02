import React from 'react'
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div>
      <div>
        <Link to="/admin/create-test">
          <button>Create test</button>
        </Link>
      </div>
      <div>
        <Link to="/admin/my-tests">
          <button>My tests</button>
        </Link>
      </div>
    </div>
  )
}

export default AdminPanel
