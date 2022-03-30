import Category from "../model/category";

export const ListCategory = async(req, res) => {
    try {
        const category = await Category.find({}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện' })
    }
}
export const AddCate = async(req, res) => {
    try {
        const category = await Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thêm mới danh mục' })
    }
}
export const ListCategoryDetail = async(req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện' })
    }
}
export const DeleteCategory = async(req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức anwng xóa' })
    }
}
export const UpdateCategory = async(req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức anwng update' })
    }
}