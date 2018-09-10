defmodule Pleroma.Plugs.EnsureUserKeyPlugTest do
  use Pleroma.Web.ConnCase, async: true

  alias Pleroma.Plugs.EnsureUserKeyPlug

  test "if the conn has a user key set, it does nothing", %{conn: conn} do
    conn =
      conn
      |> assign(:user, 1)

    ret_conn =
      conn
      |> EnsureUserKeyPlug.call(%{})

    assert conn == ret_conn
  end

  test "if the conn has no key set, it sets it to nil", %{conn: conn} do
    conn =
      conn
      |> EnsureUserKeyPlug.call(%{})

    assert Map.has_key?(conn.assigns, :user)
  end
end
