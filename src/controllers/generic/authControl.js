import bcryptHelper from "../../helpers/bcryptHelper.js";
import DAOFactory from "../../helpers/DAOFactory.js";
import { logger } from "../../utils/logger.js";
const userDAO = DAOFactory.getUserDAO();

export async function renderLoginPage(req, res) {
        res.render('login')
    }

