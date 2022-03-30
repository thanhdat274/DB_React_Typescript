import Product from '../model/product'

export const ListProduct = async(req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện' })
    }
}
export const AddProduct = async(req, res) => {
    try {
        const product = await Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thêm mới sản phẩm' })
    }
}
export const ListProductDetail = async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện' })
    }
}
export const DeleteProduct = async(req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức anwng xóa' })
    }
}
export const UpdateProduct = async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức anwng update' })
    }
}