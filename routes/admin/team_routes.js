const express = require('express');
const router = express.Router();

// ✅ Import Controllers
const { 
    get_all_members, 
    add_member, 
    get_member_by_id, 
    update_member, 
    delete_member, 
    change_status 
} = require('../../controllers/admin/team_controller');

// ✅ Import Middlewares & Validators
const { validate_team, validate_status, validate_id } = require('../../validators/admin/team_validator');
const auth_middleware = require('../../middlewares/auth_middleware');


// ✅ Team Management Routes

// 📋 Get all team members (with search, filter, and pagination)
router.get('/', auth_middleware, get_all_members);

// ➕ Add a new team member
router.post('/add', auth_middleware, validate_team, add_member);

// 🔍 Get team member details by ID
router.get('/:id', auth_middleware, validate_id, get_member_by_id);

// ✏️ Update team member details
router.put('/:id', auth_middleware, validate_id, validate_team, update_member);

// ❌ Delete a team member (soft delete)
router.delete('/:id', auth_middleware, validate_id, delete_member);

// 🔄 Change team member status (Active/Inactive)
router.patch('/:id/status', auth_middleware, validate_id, validate_status, change_status);

// ✅ Export Router
module.exports = router;
