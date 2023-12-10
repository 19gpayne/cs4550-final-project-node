import * as dao from "./dao.js";
function CompanyRoutes(app) {
    const findAllCompanies = async (req, res) => {
        const company = await dao.findAllCompanies();
        res.json(company);
      };

      //This is prolly where your API should connect to
      const createCompany = async (req, res) => {
        const company = await dao.createCompany(req.body);
        res.json(company);
      };

      const findCompanyById = async (req, res) => {
        const company = await dao.findCompanyById(req.params._id);
        res.json(company);
      };

      const deleteCompany = async (req, res) => {
        const status = await dao.deleteCompany(req.params._id);
        res.json(status);
      };   

      const updateCompany = async (req, res) => {
        const { _id } = req.params;
        const status = await dao.updateCompany(_id, req.body);
        res.json(status);
      }

    app.get("/api/companies", findAllCompanies);
    app.post("/api/companies", createCompany);
    app.get("/api/companies/:_id", findCompanyById);
    app.delete("/api/companies/:_id", deleteCompany);
    app.put("/api/companies/:_id", updateCompany);

}
export default CompanyRoutes;