import { siteModel } from "../models/site.model.mjs";

class SiteServices {
    async addSite(data) {
        try {
            const { website, sitename, status, remark } = data
            const res = await siteModel.findOrCreate({
                where: {
                    website
                },
                defaults: {
                    website,
                    sitename,
                    status,
                    remark,
                    create_time: new Date(),
                    update_time: new Date()
                }
            })
            return res;
        } catch (error) {
            return error
        }
    }

    async delSite(id) {
        try {
            const data = await siteModel.destroy({
                where: {
                    id
                }
            })
            return data;
        } catch (error) {

        }
    }

    async editSite({ id, status }) {
        try {
            const data = await siteModel.update({ status }, {
                where: {
                    id
                }
            })
            return data;
        } catch (error) {

        }
    }

    async getSite() {
        const data = await siteModel.findAll()
        return data;
    }
}

export default new SiteServices();