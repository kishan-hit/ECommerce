import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ category: ["veg", "non-veg", "vegan"] }, { Delivery: ["Immediate", "Schedule"] }].map(
        (item, idx) => (
          <div key={idx} className="mb-3">
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, idx) => (
              <Form.Check key={idx} type="checkbox" label={i} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default AttributesFilterComponent;

