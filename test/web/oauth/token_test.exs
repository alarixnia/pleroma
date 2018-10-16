defmodule Pleroma.Web.OAuth.TokenTest do
  use Pleroma.DataCase
  alias Pleroma.Web.OAuth.{App, Token, Authorization}
  alias Pleroma.Repo

  import Pleroma.Factory

  test "exchanges a auth token for an access token" do
    {:ok, app} =
      Repo.insert(
        App.register_changeset(%App{}, %{
          client_name: "client",
          scopes: "scope",
          redirect_uris: "url"
        })
      )

    user = insert(:user)

    {:ok, auth} = Authorization.create_authorization(app, user)

    {:ok, token} = Token.exchange_token(app, auth)

    assert token.app_id == app.id
    assert token.user_id == user.id
    assert String.length(token.token) > 10
    assert String.length(token.refresh_token) > 10

    auth = Repo.get(Authorization, auth.id)
    {:error, "already used"} = Token.exchange_token(app, auth)
  end

  test "deletes all tokens of a user" do
    {:ok, app1} =
      Repo.insert(
        App.register_changeset(%App{}, %{
          client_name: "client1",
          scopes: "scope",
          redirect_uris: "url"
        })
      )

    {:ok, app2} =
      Repo.insert(
        App.register_changeset(%App{}, %{
          client_name: "client2",
          scopes: "scope",
          redirect_uris: "url"
        })
      )

    user = insert(:user)

    {:ok, auth1} = Authorization.create_authorization(app1, user)
    {:ok, auth2} = Authorization.create_authorization(app2, user)

    {:ok, token1} = Token.exchange_token(app1, auth1)
    {:ok, token2} = Token.exchange_token(app2, auth2)

    {tokens, _} = Token.delete_user_tokens(user)

    assert tokens == 2
  end
end
