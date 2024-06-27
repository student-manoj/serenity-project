import { BlogData } from "@/utils/BlogData";
import BlogCard from "./BlogCard";
import Heading from "./Heading";

const BlogSection = () => {
  return (
    <>
      <div className="bg-[#ff7b0006] pt-16 pb-72">
        <div className="container mx-auto px-4">
          <Heading
            title="Our Blog Post"
            titleName="Our Latest News & Update"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
          />
          <div className="grid lg:grid-cols-3 lg:gap-6 md:gap-52 gap-80 py-14">
            {BlogData.slice(0, 3).map((val) => (
              <BlogCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
