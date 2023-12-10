import model from "./model.js";
export const findAllCompanies = () => model.find();
export const createCompany = (company) => model.create(company);
export const updateCompany = (id, company) =>
  model.updateOne({ _id: id }, { $set: company });
export const findCompanyById = (id) => model.findOne({_id: id});
export const deleteCompany = (key) => model.deleteOne({ _id: id });