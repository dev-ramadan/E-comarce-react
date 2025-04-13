import { useProduct } from "../../../../Utils/Hooks/useProduct";
import { motion } from "framer-motion";
const ProductCartCategory = () => {
  const phone = 'smartphones';
  const groceries = 'groceries'
  const beauty = 'beauty'
  const mensShirts = 'mens-shirts'
  const mensShoes = 'mens-shoes'
  const beautyDAta = useProduct(beauty);
  const mensShirtsData = useProduct(mensShirts);
  const mensShoesData = useProduct(mensShoes);
  const groceriesData = useProduct(groceries);
  const beautys = beautyDAta.products.slice(1, 2);
  const mensShirt = mensShirtsData.products.slice(1, 2);
  const mensShoe = mensShoesData.products.slice(1, 2);
  const grocerie = groceriesData.products.slice(1, 2)
  const data = [...grocerie,  ...beautys, ...mensShirt, ...mensShoe];
  return (
    <>
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">تصفح الأقسام</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item,index) => (
          <motion.div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                {item.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
};

export default ProductCartCategory;
