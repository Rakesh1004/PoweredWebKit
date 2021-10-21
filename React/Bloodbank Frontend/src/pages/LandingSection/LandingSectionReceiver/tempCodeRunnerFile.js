<div className="request-grid">
          {requests.map((request) => {
            // eslint-disable-next-line no-unused-vars
            const { reason, bloodgroup, status, address, _id,name,phno } = request;
            return (
              <div
                className="request-box"
                style={
                  !status
                    ? { backgroundColor: "#880808" }
                    : { backgroundColor: "green" }
                }
              >
                <div className="left">
                  <div className="request-box-field">{name}</div>
                  <div className="request-box-field">{bloodgroup}</div>

                  <div className="request-box-field">{address.city}</div>
                  <div className="request-box-field">{phno}</div>
                  <div className="request-box-reason">
                    <p>{reason}</p>
                  </div>
                </div>

                <div className="right">
                  <img src="assets/images/drop.png" alt="" className="drop" />

                  <button
                    className="know-more-btn"
                    onClick={() =>
                      (window.location = `/user/bloodrequest/${_id}`)
                    }
                  >
                    KNOW MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>